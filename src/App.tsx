import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// them thanh phan Login trong thu muc pages/login/index.tsx
// o phia component Login, export default
// Voi import default thi co the doi ten
import Login from './pages/login';
// Voi import khong default thi co the as
import { USER_LOGIN as LOGIN_USER } from './pages/login';

import TableCustom from './pages/table';

type Student = {
    name: string,
    age: number,
    phone: string,
    address: string
};

type Students = Student[];

function App() {
    console.log('App view render');
    // dinh nghia state gom 2 phan tu trong 1 mang
    // phan tu 1: state
    // phan tu 2: phuong thuc cap nhat state
    // useState(nhan vao gia tri mac dinh cua count)
    // const [ten_state, ten_phuong_thuc_thay_doi] = useState<kieu>(gt macdinh);

    // Khi state thay doi bang phuong thuc setState thi view moi render lai
    const [count, setCount] = useState<number>(0);
    const [name, setName] = useState<string>('');
    // State trang thai hien thi bang
    const [isShowTable, setShowTable] = useState<boolean>(true);
    // Them state luu student de sau khi them se tien hanh render lai

    const [students, setStudents] = useState<Students>([

    ])
    const headCells = [
        {
            label: 'Ten',
            key: 'name'
        },
        {
            label: 'Tuoi',
            key: 'age'
        },
        {
            label: 'Dia chi',
            key: 'address'
        },
        {
            label: 'SDT',
            key: 'phone'
        },
    ];

    // let count = 0;

    // const updateCount = () => count++;
    const onAddStudent: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const newStudents = [
            ...students,
            {
                name: namestudent,
                age: age,
                address: address,
                phone: phone
            }
        ];
        setStudents(newStudents);
    }
    const [namestudent, setNamestudentValue] = useState<string>('');
    const [age, setAgeValue] = useState<number>(0);
    const [phone, setPhoneValue] = useState<string>('');
    const [address, setAddressValue] = useState<string>('');


    return (
        <div className="App">
            <button onClick={() => setCount(count + 1)}>Update count</button>
            <p>{count}</p>
            <button onClick={() => setName('vulqph')}>Update name</button>
            <p>Name: {name}</p>
            <button
                onClick={() => setShowTable(!isShowTable)}
            >{isShowTable === true ? 'An' : 'Hien'} bang</button>
            {/* Them component Table vao trong App */}
            {
                isShowTable === true
                    ? <TableCustom
                        rows={students}
                        headCells={headCells}
                    />
                    : null
            }


            {/* Them students vao form */}
            <form onSubmit={onAddStudent}>
                <input type="text" placeholder='name'
                    defaultValue={namestudent}
                    onChange={(event) => setNamestudentValue(event.target.value)}
                />
                <input type="number" min={0} placeholder='age'
                    defaultValue={String(age)}
                    onChange={(event) => setAgeValue(Number(event.target.value))}
                />
                <input type="text" placeholder='phone'
                    defaultValue={phone}
                    onChange={(event) => setPhoneValue(event.target.value)} />
                <input type="text" placeholder='address'
                    defaultValue={address}
                    onChange={(event) => setAddressValue(event.target.value)} />
                <button type='submit'>Submit</button>
            </form>
            {/* Them view Login vao trong App */}
            {/* Khong co the dong */}
            {/* viewName la ten cua 1 trong so cac prop truyen vao */}
            <Login
                viewName={'Login view from APP'}
                username='vulqph' // voi gia tri la string thi co the k can ngoac
                password='123123123'
            />
        </div>
    );
}

export default App;