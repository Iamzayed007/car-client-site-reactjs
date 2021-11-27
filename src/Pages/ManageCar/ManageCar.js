import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { Icon } from 'react-icons-kit';
import {trashO} from 'react-icons-kit/fa/trashO';

const ManageCar = () => {
    const { user,setUser,loading,setLoading } = useAuth()
    
    const [myOrder, setMyOrder] = useState([])
    
    useEffect(() => {
        //  setLoading(true)
        fetch('https://powerful-bastion-59588.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => {
              
                setMyOrder(data)
                console.log(data)
                
            })
  
    }, [myOrder])


    const handleDeleteUser = id =>{

        const proceed = window.confirm('are you sure, you want to delete?');
        if(proceed){
            const url = `https://powerful-bastion-59588.herokuapp.com/cars/${id}`
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
        <h1 className=" text-center mt-5">Manage Car </h1>
        <div className="h-100 table-section text-center p-5">
        {!loading ? 
            <Table className=" w-100 mb-5" hover>
            {myOrder.length > 0 ?
                <>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Brand</th>
                            <th>Price</th>
                            
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                    {
                                myOrder.map(or => <>
                                    <tr>
                                        <td>{or.name} </td>
                                        <td>{or.brand} </td>
                                        <td>{or.price}</td>
                                        
                                        <td><button onClick={()=>handleDeleteUser(or._id)} className="btn btn-outline-danger"><Icon size={15} icon={trashO} /> </button></td>
                                    </tr>
                                </>)
                            }

</tbody>
                    </>
                    :
                    'Please select a tour place first'
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

export default ManageCar;