import React from 'react'
import list_product_icon from '../assets/Product_list_icon.svg'
import add_product_icon from '../assets/upload_cloud_icon.svg'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Link to='/add-product' style={{ textDecoration: 'none' }}>
                <button className="sidebar-item">
                    <img src={add_product_icon} alt="" />
                    <p>Add Car</p>
                </button>
            </Link>
            <Link to='/products' style={{ textDecoration: 'none' }}>
                <button className="sidebar-item">
                    <img src={list_product_icon} alt="" />
                    <p>My Cars</p>
                </button>
            </Link>

        </div>
    )
}
