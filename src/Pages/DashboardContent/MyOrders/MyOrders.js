import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { Icon } from 'react-icons-kit';
import {trashO} from 'react-icons-kit/fa/trashO';

const MyOrders = () => {
    const { user,setUser,loading,setLoading } = useAuth()
    
    const [myOrder, setMyOrder] = useState([])
    
    useEffect(() => {
        //  setLoading(true)
        fetch('https://powerful-beach-17355.herokuapp.com/purchase')
            .then(res => res.json())
            .then(data => {
              
                const userEmail = user.email;
                const order = data.filter(mo => mo.email === userEmail)
                setMyOrder(order)
                console.log(order)
                
            })
           
    }, [myOrder])


    const handleDeleteUser = id =>{

        const proceed = window.confirm('are you sure, you want to delete?');
        if(proceed){
            const url = `https://powerful-beach-17355.herokuapp.com/purchase/${id}`
            fetch (url,{
                method:'DELETE',
               
            })
            .then(res=>res.json())
            .then(data =>{
                if(data.deletedCount>0){
                    alert('deleted successfully');
                    const remainingUsers= myOrder.filter(users=>users._id !== id);
                    setMyOrder(remainingUsers)
    
                }
            })
        }

      
    }
    return (
        <div className="h-100">
        <h1 className=" text-center mt-5">My <span className="text-">Order</span> </h1>
        <div className="h-100 table-section text-center p-5">
        {!loading ? 
            <Table className=" w-50 mb-5" hover>
            {myOrder.length > 0 ?
                <>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Car Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                    {
                                myOrder.map(or => <>
                                    <tr>
                                        <td>{or.name} </td>
                                        <td>{or.email} </td>
                                        <td>{or.purchase.name}</td>
                                        <td>{or.purchase.price}</td>
                                        <td>{or.status} </td>
                                        <td><button onClick={()=>handleDeleteUser(or._id)} className="btn btn-outline-danger"> <Icon size={15} icon={trashO} /></button></td>
                                    </tr>
                                </>)
                            }

</tbody>
                    </>
                    :
                    'No car purchase'
                }
            </Table>
            : ''
            // :<Spinners></Spinners>
        }
            </div>
            {/* <div className="h-100"></div> */}
        </div>

    );
};

export default MyOrders;