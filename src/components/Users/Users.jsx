import React from "react";
import User from "./User";
import loading from "../../assets/images/loading.gif";
import Paginator from "../Paginator/Paginator";

const Users = (props) => {

    return (
        <div>

            <div>
                {<Paginator pageSize={props.pageSize} currentPage={props.currentPage} onPageCh={props.onChangePage} totalItemsCount={props.totalCount}/>}
                {/*{props.pages.map(e=> <button key={e} className={props.currentPage === e ? styles.selectedPg: styles.myButton} onClick={()=>props.onChangePage(e)}>{e}</button>)}*/}
            </div>
            {props.loadingValue ? <div><img src={loading} alt="..." height={50} width={"100%"}/></div> :null}
            {props.users.map((user) =><User key={user.id} user={user} {...props}/>)}
        </div>
    );

}

export default React.memo(Users);