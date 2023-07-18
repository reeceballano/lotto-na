import { useContext } from "react";
import LocalStorageItem from "./LocalStorageItem";
import { LocalStorageContext } from "../context/LocalStorageProvider";

const LocalStorageItems = () => {
    const { lsLotto } = useContext(LocalStorageContext);
    const sortedData = lsLotto?.sort((a,b) => +new Date(b.date) - +new Date(a.date));

    return (
            <ul className='history-list'>
                {
                    (sortedData?.length) ?  
                        sortedData.map(item => {
                            return <LocalStorageItem item={item} key={item.id} />
                        })
                        :
                        <h3>Press the "Save" button to store numbers.</h3>
                }   

            </ul>
    )
}

export default LocalStorageItems;