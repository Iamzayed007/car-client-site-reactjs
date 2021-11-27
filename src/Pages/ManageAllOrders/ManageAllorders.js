import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { Icon } from 'react-icons-kit';
import {trashO} from 'react-icons-kit/fa/trashO';
import {ic_done_all} from 'react-icons-kit/md/ic_done_all';

const ManageAllorders = () => {
    const { user,loading,setLoading } = useAuth()
    const [mypurchase, setMyPurchase] = useState([])
    
    

    useEffect(() => {
       
        fetch('https://powerful-bastion-59588.herokuapp.com/purchase')
            .then(res => res.json())
            .then(data => {
               
                
                setMyPurchase(data)
               
            })
           
    }, [mypurchase])
  

    const handleStatus = (id, e) => {

        const proceed = window.confirm('Are you sure ?')
        if (proceed) {



            const orderStatus = 'shipped';
            const orderData = {
                status: orderStatus
            }

            fetch(`https://powerful-bastion-59588.herokuapp.com/purchase/${id}`, {
                method: 'PATCH',
                headers: { 'content-Type': 'application/json' },
                body: JSON.stringify(orderData)
            })
                .then(res => res.json())
                .then(data => {
                    if (true) {

                        alert('update successfully')
                        setMyPurchase(data)
                        
                    }
                })
            e.preventDefault()
        }
    }

   
   
    const handleDeleteUser = id =>{

        const proceed = window.confirm('are you sure, you want to delete?');
        if(proceed){
            const url = `https://powerful-bastion-59588.herokuapp.com/purchase/${id}`
            fetch (url,{
                method:'DELETE',
               
            })
            .then(res=>res.json())
            .then(data =>{
                if(data.deletedCount>0){
                    alert('deleted successfully');
                    const remainingUsers= mypurchase.filter(users=>users._id !== id);
                    setMyPurchase(remainingUsers)
    
                }
            })
        }
    }
    return (
        <div className="h-100">
        <h1 className=" text-center mt-5">Manage All Purchase</h1>
        <div className="h-100 table-section text-center p-5">
            {!mypurchase.length ? <Spinner></Spinner>:
                <Table className=" w-50 mb-5" hover>
                {mypurchase.length > 0 ?
                    <>
                        <thead>
                            <tr>
                                <th colSpan="3">Name</th>
                                <th>Email</th>
                                <th>Car Name</th>
                                <th colSpan="3">Price</th>
                                <th>Status</th>
                                <th colSpan="2">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                        {
                                    mypurchase.map(or => <>
                                        <tr>
                                            <td colSpan="3">{or.name} </td>
                                            <td>{or.email} </td>
                                            <td>{or.purchase.name} </td>
                                            <td colSpan="3">{or.purchase.price}</td>
                                            <td>{or.status}</td>
                                            
                                            <td><button onClick={()=>handleDeleteUser(or._id)} className="btn btn-outline-danger"><Icon size={15} icon={trashO} /></button></td>
                                            <td>
                                                <form onSubmit={(e) => handleStatus(or._id, e)}>
                                                    <input hidden type="text" value="confirm" />
                                                    <button type="submit" className="btn btn-outline-success"><Icon size={15} icon={ic_done_all} /></button>

                                                </form>
                                            </td>
                                        </tr>
                                    </>)
                                }

</tbody>
                        </>
                        :
                        'Select Your Tour Place First'
                    }
                </Table>
            }
            </div>
            {/* <div className="h-100"></div> */}
        </div>

    );
};


export default ManageAllorders;