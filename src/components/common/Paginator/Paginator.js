import React, {useState} from 'react';
import styles from "./Paginator.module.css";
import cn from "classnames";
import {Button_Primary} from "../../Button/CSS";

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return <div className={styles.paginator}>
        {portionNumber > 1 &&
        <Button_Primary
            mbXs={"15px"}
            onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</Button_Primary>}

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <p className={cn({
                    [styles.selectedPage]: currentPage === p
                }, styles.pageNumber)}
                          key={p}
                          onClick={(e) => {
                              onPageChanged(p);
                          }}>{p}</p>
            })}

        {portionCount > portionNumber &&
        <Button_Primary mtXs={"15px"}
                        onClick={() => {
                            setPortionNumber(portionNumber + 1)
                        }}>NEXT</Button_Primary>}
    </div>
}

export default Paginator;