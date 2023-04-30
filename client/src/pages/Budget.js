import React, { useState } from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import Budget from '../components/Budget/index';

export default function BudgetPage() {

    return (
        <div>
            <Navbar.Brand className='brand-name text-4xl font-bold text-blue-800' href="/Profile">EZ</Navbar.Brand>
            <Budget />
        </div>

    );


}