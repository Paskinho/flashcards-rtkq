import {DevTool} from "@hookform/devtools";
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
import {useGetMeQuery} from "../../services/auth/auth";
import {FaSearch, FaTrash} from "react-icons/fa";
import {useCreateDeckMutation, useDeleteDeckMutation, useGetDecksQuery} from "../../services/decks/decks";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";
import * as dayjs from "dayjs";
import {Toggle} from "../../components/ui/toggle";
import {Slider} from "../../components/ui/slider";

const schema = z.object({})

type NewDeck = z.infer<typeof schema>

type DecksProps = {
    onSubmit: (data: NewDeck) => void
}


export const Decks = ({onSubmit}: DecksProps) => {

    // const {data: user} = useGetMeQuery() УТОЧНИТЬ!

    const [showModal, setShowModal] = useState(true)
    const closeModal = () => setShowModal(false)
    const openModal = () => setShowModal(true)
    const [search, setSearch] = useState('')
    const [showMyDecks, setShowMyDecks] = useState(false)
    const [range, setRange] = useState([0, 100])
    const [sort, setSort] = useState({key: 'updated', direction: 'asc'})
    const sortString = sort ? `${sort.key} - ${sort.direction}` : null

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


    const {control, handleSubmit} = useForm<FormType>({
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
            <div className={s.page}>
                <div className={s.header}>
                    <Typography variant={'large'}>Decks list</Typography>
                    <label>
                        Show only my decks
                        <Toggle checked={showMyDecks}
                                onCheckedChange={setSearch}
                                className={s.toggle}
                        />
                    </label>
                    <div style={{ display: 'flex', flexGrow: '1' }}>
                        <Slider
                        onValueCommit={setRange}
                        value={rangeValue}
                        onValueChange={setRangeValue}
                        max={decks?.maxCardsCount}
                        />
                    </div>
                    <Button variant={'secondary'} onClick={resetFilters}>
                       <FaTrash/>
                       Reset Filters
                    </Button>
                    <Button onClick={openModal}>Add New Pack</Button>
                </div>
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
                        <Button type={'submit'}>Create</Button>
                    </form>
                </Modal>
                <ControlledTextField
                    className={s.search}
                    name={'search'}
                    control={control}
                    type={'search'}
                    placeholder={'Search'}
                    onValueChanged={setSearch}
                />

                <div>
                    <Table.Root style={{width: '100%'}}>
                        <Table.Header
                            columns={columns}
                            sort={sort}
                            onSort={setSort}
                        />
                        <Table.Body>
                            {decks?.items?.map(deck => (
                                <Table.Row key={deck.id}>
                                    <Table.Cell>
                                        <Link to={`/cards/${deck.id}`}>
                                            {deck.name}
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell>
                                        {deck.cardsCount}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {dayjs(deck.updated).format('L, LT')}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {deck.author.name}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <button className={'unset'}
                                        onClick={()=> {
                                            deleteDeck({deckId: deck.id})
                                        }}
                                        >
                                            <FaTrash/>
                                        </button>
                                    </Table.Cell>
                                </Table.Row>

                            ))}

                                </Table.Body>
                                </Table.Root>
                </div>
            </div>
        </Page>
    )
}