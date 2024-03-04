import {z} from "zod";
import {Page} from "../../components/ui/page";
import {useForm} from "react-hook-form";
import {Typography} from "../../components/ui/typography";
import {Modal} from "../../components/ui/modal";
import {Button} from "../../components/ui/button";
import s from './decks.module.scss'
import {ControlledTextField} from "../../components/controlled/controlled-text-field";
import {zodResolver} from "@hookform/resolvers/zod";
import {useEffect, useState} from "react";
import {ControlledCheckbox} from "../../components/controlled/controlled-checkbox";
import DeckLogo from '../../assets/photo/DeckLogo.png'
import {Column, Table} from "../../components/ui/table";
import {FaEdit, FaTrash} from "react-icons/fa";
import {useCreateDeckMutation, useDeleteDeckMutation, useGetDecksQuery} from "../../services/decks/decks";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";
import * as dayjs from "dayjs";
import {Toggle} from "../../components/ui/toggle";
import {Slider} from "../../components/ui/slider";
import {Pagination} from "../../components/ui/pagination";
import {useDeckSearchParams} from '../decks/use-deck-search-params'
import { FaPlay } from "react-icons/fa";
import {navigate} from "@storybook/addon-links";



const schema = z.object({})

type NewDeck = z.infer<typeof schema>

type DecksProps = {
    onSubmit: (data: NewDeck) => void
}


export const Decks = ({onSubmit}: DecksProps) => {

    // const {data: user} = useGetMeQuery()
    const [showModal, setShowModal] = useState(false)
    const closeModal = () => setShowModal(false)
    const openModal = () => setShowModal(true)
    const [search, setSearch] = useState('')
    const [showMyDecks, setShowMyDecks] = useState(false)
    const [range, setRange] = useState([0, 100])
    const [sort, setSort] = useState({key: 'updated', direction: 'asc'})
    // const sortString = sort ? `${sort.key} - ${sort.direction}` : null
    const sortString = null

    // const {
    //     currentPage,
    //     currentTab,
    //     maxCardsCount,
    //     minCardsCount,
    //     rangeValue,
    //     search,
    //     setCurrentPage,
    //     setCurrentTab,
    //     setMaxCards,
    //     setMinCards,
    //     setRangeValue,
    //     setSearch,
    //     setSort,
    //     sort,
    // } = useDeckSearchParams()

    const {data: decks, isLoading} = useGetDecksQuery({
        itemsPerPage: 100,
        name: search,
        authorId: showMyDecks ? user?.id : undefined,
        minCardsCount: range[0],
        maxCardsCount: range[1],
        orderBy: sortString
    })

    const [rangeValue, setRangeValue] = useState([0, 1])

    useEffect(() => {
        if (rangeValue[1] !== decks?.maxCardsCount) {
            setRangeValue(prev => [prev[0], decks?.maxCardsCount || 100])
        }
    }, [decks?.maxCardsCount])


  const { control, handleSubmit } = useForm<FormType>({
        resolver: zodResolver(schema),
        defaultValues: {
            isPrivate: false,
            name: '',
        },
    })

    const resetFilters = () => {
        setSearch('')
        setShowMyDecks(false)
        setRange([0,100])
        setRangeValue([0,100])
        // setCurrentPage(null)
        // setSearch(null)
    }

    const [createDeck] = useCreateDeckMutation()
    const [deleteDeck] = useDeleteDeckMutation()
    const handleDeckCreated = (args: NewDeck) => {
        createDeck(args)
            .unwrap().
            then(()=> {
                toast.success('Deck created succesfully')
            closeModal()
        })
            .catch(err=> {
                toast.error(err.data.message)
            })

    }

    const handleLogoChanged = () => {
        return (
            alert('Logo changed!')
        )
    }


    const columns: Column[] = [
        {key: 'Name', sortable: true, title: 'Name'},
        {key: 'Cards', sortable: true, title: 'Cards'},
        {key: 'Last Updated', sortable: true, title: 'Last Updated'},
        {key: 'Created By', sortable: true, title: 'Created By'}
    ]

    if (isLoading) return <div>loading...</div>

    return (
        <Page>
            <Modal open={showModal} onClose={closeModal} title={'Create Deck'}>
                <form onSubmit={handleSubmit(handleDeckCreated)}>
                    <img
                        className={s.deckLogo}
                        alt={'deck logo'}
                        src={DeckLogo}
                    />
                    <Button onClick={handleLogoChanged}> Change Logo</Button>
                    <ControlledTextField
                        name={'Name Pack'}
                        label={"Name Pack"}
                        control={control}
                    />
                    <ControlledCheckbox
                        control={control}
                        name={"Private pack"}
                        label={'Private pack'}
                        position={'left'}
                    />
                    <Button variant={'secondary'}>Cancel</Button>
                    <Button type={'submit'}>Create Deck</Button>
                </form>
            </Modal>
            <div className={s.page}>
                <div
                    style={{
                        marginBottom: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography variant={'large'}>Decks</Typography>
                    <Button onClick={openModal}>Add New Deck</Button>
                </div>
                <div className={s.control}>
                    <ControlledTextField
                        name={'search'}
                        control={control}
                        type={'search'}
                        placeholder={'Search'}
                        onValueChanged={setSearch}
                    />
                    <label className={s.toggle}>
                        Show only my decks
                        <Toggle checked={showMyDecks}
                                onCheckedChange={setSearch}
                        />
                        {/*<Tabs asChild onValueChange={setSearch()}*/}
                        {/*      value={showMyDecks ?? undefined}>*/}
                        {/*<TabsList>*/}
                        {/*    <TabsTrigger value={'my'}>My decks</TabsTrigger>*/}
                        {/*    <Tabs.Trigger value={'all'}>All decks</Tabs.Trigger>*/}
                        {/*</TabsList>*/}
                        {/*</Tabs>*/}
                    </label>
                    <div style={{ display: 'flex', flexGrow: '1' }}>
                        <Slider
                        onValueCommit={setRange}
                        value={rangeValue}
                        onValueChange={setRangeValue}
                        max={decks?.maxCardsCount}
                        />
                    </div>
                    <Button className={s.button} variant={'secondary'} onClick={resetFilters}>
                       <FaTrash/>
                       Reset Filters
                    </Button>
                </div>
                </div>


                <div>
                    <Table.Root style={{width:'80%',

                        // marginRight: '120px',
                        // marginLeft: '120px'
                    }}>
                        <Table.Header
                            columns={columns}
                            sort={sort}
                            onSort={setSort}
                        />
                        <Table.Body>
                            {decks?.items?.map(deck => (
                                <Table.Row key={deck.id}>
                                    <Table.Cell>
                                        <Link to={`cards/${deck.id}`} className={s.link}>
                                            {deck.name}
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell>
                                        {deck.cardsCount}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {dayjs(deck.updated).format('DD.MM.YYYY')}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {deck.author.name}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {/*<button className={'unset'}*/}
                                        {/*onClick={()=> {*/}
                                        {/*    deleteDeck({deckId: deck.id})*/}
                                        {/*}}*/}
                                        {/*>*/}
                                            <FaPlay className={s.icon} onClick={navigate('/learnCard')}/>
                                            {/*<FaRegCirclePlay className={s.icon}/>*/}
                                        {/*</button>*/}
                                    </Table.Cell>
                                </Table.Row>

                            ))}
                                </Table.Body>
                                </Table.Root>
                    <Pagination
                    className={s.pagination}
                    count={decks?.pagination?.totalPages || 1}
                    // page={currentPage ?? 1}
                    page={ 1}
                    onChange={useDeckSearchParams}
                    />
                </div>
        </Page>
    )
}
//
// create card without modal
// const schemaCreateCard = z.object({
//     cover: z.array(z.instanceof(File)),
//     name: z.string()
// })
//
// type Form = z.infer<typeof schemaCreateCard>
//
//
// function CreateCard() {
//     const {register, handleSubmit} = useForm<Form>()
//     const [createDeck] = useCreateDeckMutation()
//     const onSubmit = handleSubmit(data => {
//         const form = new FormData()
//
//         form.append('cover', data.cover[0])
//         form.append('name', data.name)
//
//         createDeck(form)
//     })
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <input type={'file'} {...register('cover')}/>
//             <input type={'text'} {...register('name')}/>
//             <button type={'submit'}>Submit</button>
//         </form>
//     )
// }