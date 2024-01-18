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
import {useState} from "react";
import {ControlledCheckbox} from "../../components/controlled/controlled-checkbox";
import DeckLogo from '../../assets/photo/DeckLogo.png'
import {Table} from "../../components/ui/table";
import {useGetMeQuery} from "../../services/auth/auth";
import {FaSearch, FaTrash} from "react-icons/fa";

const schema = z.object({})

type FormType = z.infer<typeof schema>

type DecksProps = {
    onSubmit: (data: FormType) => void
}


export const Decks = ({onSubmit}: DecksProps) => {

    // const {data: user} = useGetMeQuery()

    const [showModal, setShowModal] = useState(true)
    const closeModal = () => setShowModal(false)
    const openModal = () => setShowModal(true)
    const [search, setSearch] = useState('')
    const [showMyDecks, setShowMyDecks] = useState(false)
    const [range, setRange] = useState([0,100])




    const handleLogoChanged = () => {
        return (
            alert('Logo changed!')
        )
    }


    const { control, handleSubmit } = useForm<FormType>({
        resolver: zodResolver(schema),
        defaultValues: {
            isPrivate: false,
            name: '',
        },
    })

    const [sort,setSort] = useState({key: 'updated', direction:'asc'})
    const sortString = sort ? `${sort.key} - ${sort.direction}` : null

    const columns = [
        {key: 'Name', sortable: true, title: 'Name'},
        {key: 'Cards', sortable: true, title: 'Cards'},
        {key: 'Last Updated', sortable: true, title: 'Last Updated'},
        {key: 'Created By', sortable: true, title: 'Created By'}
    ]


    return (
        <Page>
            <div className={s.page}>
                <div className={s.header}>
                <Typography variant={'large'}>Decks list</Typography>
                <Button>Add New Pack</Button>
                </div>
                <Modal open={showModal} onClose={closeModal} title={'Create Deck'}>
              <form onSubmit={handleSubmit} >
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
                    placeholder={'search'}
                />

                <div>
                    <Table.Root style={{ width: '100%' }}>
                    <Table.Header
                        columns={columns}
                        sort={sort}
                        onSort={setSort}
                    />
                    <Table.Body>
                        <Table.Row key={1}>

                        </Table.Row>

                    </Table.Body>
                    </Table.Root>
                </div>

            </div>
        </Page>
    )
}