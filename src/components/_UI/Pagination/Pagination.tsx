import ReactPaginate from 'react-paginate'
import PaginationCss from './Pagination.module.scss'

interface IPaginationProps {
  activePage: number
  itemsPerPage: number
  documentsCount?: number
  onPaginationButtonClick: (page: number, limit: number) => void
}

const Pagination = ({
  activePage = 0,
  itemsPerPage = 0,
  documentsCount = 0,
  onPaginationButtonClick,
}: IPaginationProps) => {

  const onHandlePageClick = (event: { selected: number }) => {
    const currentPage = event.selected + 1
    onPaginationButtonClick(currentPage, itemsPerPage)
  }

  const pageCount = Math.ceil(documentsCount/itemsPerPage)

  return (
    <ReactPaginate
      forcePage={activePage}
      onPageChange={onHandlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      renderOnZeroPageCount={()=>{}}
      containerClassName={PaginationCss.wrapper}
      previousLinkClassName={PaginationCss.previousBtn}
      nextLinkClassName={PaginationCss.nextBtn}
      disabledClassName={PaginationCss.disabled}
      activeClassName={PaginationCss.active}
      previousLabel="назад"
      nextLabel="далее"
    />
  )
}

export default Pagination
