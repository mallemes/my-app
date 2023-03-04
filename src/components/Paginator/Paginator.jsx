import React, {useEffect, useState} from "react";
import styles from "../Users/Users.module.css";


const Paginator = ({totalItemsCount, pageSize,currentPage,onPageCh,portionSize=10}) => {
    let pagesCount = Math.ceil(totalItemsCount/ pageSize);
        let pages = [];
    for (let i =1;i<=pagesCount;i++){
        pages.push(i)
    }
     let portionCount = Math.ceil(pagesCount/portionSize);
    const [portionNum, setPortionNum] = useState(Math.ceil(currentPage/portionSize));
    let leftPortionNum = (portionNum - 1) * portionSize + 1;
    let rightPortionNum = portionNum  * portionSize ;
    useEffect(()=>{setPortionNum(Math.ceil(currentPage/portionSize));},[currentPage, portionSize]);
    return(

        <div>
            {/*{props.pages.map(e=> <button key={e} className={props.currentPage === e ? styles.selectedPg: styles.myButton} onClick={()=>props.onChangePage(e)}>{e}</button>)}*/}

            {portionNum > 1 && <button onClick={()=>setPortionNum(portionNum - 1)}>Prev</button>}
            {pages.filter(p =>p >= leftPortionNum && p<=rightPortionNum)
                .map((p)=>{
                    return <button  className={currentPage === p ? styles.selectedPg: styles.myButton}  key={p} onClick={()=>{onPageCh(p)}}>{p}</button>
                })}
            {portionCount> portionNum && <button onClick={()=>setPortionNum(portionNum + 1)}>NEXT</button>}
        </div>
    )

}

export default Paginator