import React, { useState, useEffect } from 'react'
import { ReceiverCard } from '../../../components/Cards'
import { InputBordered } from '../../../components/Inputs'
import { useDispatch, useSelector } from 'react-redux'
import { getFindUsers } from '../../../redux/actions/user'
import InfiniteScroll from 'react-infinite-scroller'

function Transfer() {
  const [name, setName] = useState("")
  const [nameFocus, setNameFocus] = useState(false)
  const [loading, setLoading] = useState(false)
  const [hasMore, setMore] = useState(true)
  const [offset, setOffset] = useState(2)
  const [isScrolling, setScrolling] = useState(false)

  const { token } = useSelector(state => state.Auth)
  const { findUser, error } = useSelector(state => state.User)
  const dispatch = useDispatch()

  useEffect(() => {
    setLoading(true)
    dispatch(getFindUsers(token, 1, name))
    setLoading(false)
  }, [dispatch, name, token])

  const loadMore = () => {
    if (isScrolling) return false
    setScrolling(true)
    setOffset(offset + 1)
    setTimeout(() => {
      dispatch(getFindUsers(token, offset, name, false))
      setScrolling(false)
      if (findUser.length < (offset - 1) * 4) return setMore(false)
    }, 1500)
  }

  const _changeName = (e) => {
    setName(e.target.value)
    setOffset(2)
    setMore(true)
  }

  return (
    <>
      <div className="p-4 bg-white rounded-14 shadow-sm vh-85">
        <div className="d-flex justify-content-between align-items-center">
          <div className="font-weight-bold">Search Receiver</div>
        </div>

        <div className="mt-4">
          <InputBordered
            iconName="search"
            label="Enter your e-mail"
            onChange={_changeName}
            onFocus={() => setNameFocus(true)}
            onBlur={() => setNameFocus(false)}
            isFocused={nameFocus}
            value={name}
          />
        </div>

        {
          loading ? <div className="small text-center py-4">loading ...</div> :
            error ? <div className="small text-center py-4">{error}</div> :
              <InfiniteScroll
                initialLoad={false}
                loadMore={loadMore}
                hasMore={hasMore}
                loader={(<div className="small text-center py-4" key={0}>Loading ...</div>)}
              >
                {
                  findUser.map((item, index) => (
                    <ReceiverCard
                      key={index}
                      src={item.photo}
                      name={item.name}
                      phone={item.phone ? `+62 ${item.phone}` : "-"}
                      to={`/dashboard/transfer/${item.id}`}
                      className="my-2"
                    />
                  ))
                }
              </InfiniteScroll>
        }
      </div>
    </>
  )
}

export default Transfer
