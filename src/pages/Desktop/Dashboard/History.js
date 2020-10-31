import React, { useState, useEffect } from 'react'
import { HistoryCard } from '../../../components/Cards'
import { useSelector, useDispatch } from 'react-redux'
import { getHistories } from '../../../redux/actions/user'
import InfiniteScroll from 'react-infinite-scroller';


function History() {
  const [loading, setLoading] = useState(false)
  const [hasMore, setMore] = useState(true)
  const [offset, setOffset] = useState(2)
  const [isScrolling, setScrolling] = useState(0)


  const { token } = useSelector(state => state.Auth)
  const { userdata, history, error } = useSelector(state => state.User)
  const { email } = userdata

  const dispatch = useDispatch()

  useEffect(() => {
    setLoading(true)
    dispatch(getHistories(token, 1))
    setLoading(false)
  }, [dispatch, token])

  const loadMore = () => {
    if (isScrolling) return false
    if (history.history.length < (offset - 1) * 4) return setMore(false)
    setScrolling(true)
    setOffset(offset + 1)
    setTimeout(() => {
      dispatch(getHistories(token, offset, false))
      setScrolling(false)
    }, 1500)
  }

  return (
    <>
      <div className="p-4 bg-white rounded-14 vh-85 shadow-sm overflow-auto">
        <div className="d-flex justify-content-between align-items-center">
          <div className="font-weight-bold">Transaction History</div>
        </div>

        {
          loading ? <div className="small text-center py-4">loading ...</div> :
            error ? <div className="small text-center py-4">{error}</div> :
              !history.history.length ? <div className="small text-center py-4"> You dont have any transactions </div> :
                <InfiniteScroll
                  initialLoad={false}
                  loadMore={loadMore}
                  hasMore={hasMore}
                  loader={(<div className="small text-center py-4" key={0}>Loading ...</div>)}
                >
                  {
                    history.history.map((item, index) => {
                      return (
                        <div key={index} className="my-3">
                          <HistoryCard
                            src={item.photo}
                            name={item.name}
                            type={item.type}
                            amount={item.type === "transfer" ? item.amount : item.amount_topup}
                            isIncome={item.is_income}
                            status={item.status}
                            flat
                          />
                        </div>
                      )
                    })
                  }
                </InfiniteScroll>
        }
      </div>
    </>
  )
}

export default History
