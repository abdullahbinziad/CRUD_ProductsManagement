import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Products from '../components/products/Products';
import AddNewProducts from '../components/addnewProducts/AddNewProducts';
import DetailsProducts from '../components/viewProducts/DetailsProducts';
import UpdateProducts from '../components/updateProducts/UpdateProducts';
import Layout from '../components/layout/Layout';




  const router= createBrowserRouter([
        {
            path: '/',
            element: <Layout></Layout>,
            children:[
                {
                    path: '/',
                    element: <Products></Products>,
                    loader: ()=> fetch('http://localhost:3000/products')
                },
                {
                    path: '/addNew',
                    element: <AddNewProducts></AddNewProducts>,
                },
                {
                    path: '/details',
                    element: <DetailsProducts></DetailsProducts>,
                },
                {
                    path: '/update/:id',
                    element: <UpdateProducts></UpdateProducts>,
                    loader: ({params})=> fetch(`http://localhost:3000/products/${params.id}`)
                },
            ]
        }
    ])

    export default router;