import * as React from 'react';

export interface PaginatorProps {
  itemsCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}
 
export interface PaginatorState {
    
}
 
class Paginator extends React.Component<PaginatorProps, PaginatorState> {
  state = { active: false };

  createArray = (n: number) => Array.from(Array(3).keys()).map(i => i + 1);
  setActivePage = (page: number, currentPage: number): string => {
    return page === currentPage ? 'page-item active' : 'page-item';
  };
  render() {
    const { itemsCount, pageSize, onPageChange, currentPage } = this.props;
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    const arr = this.createArray(pagesCount);
    
    return (
      <nav>
        <ul className="pagination" style={{ justifyContent: 'center' }}>
          {arr.map(v => (
            <li key={v} className={this.setActivePage(v, currentPage)}>
              <a
                onClick={() => onPageChange(v)}
                className="page-link"
                href="#/"
              >
                {v}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
 
export default Paginator;