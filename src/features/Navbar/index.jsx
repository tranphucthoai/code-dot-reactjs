import React, { useEffect, useState } from 'react';
import navbarApi from './../../api/navbarApi';

Navbar.propTypes = {

};

function Navbar() {

    const [data, setData] = useState({})

    useEffect(() => {
        (async () => {
            try {
                const respone = await navbarApi.getAll()
                setData(...respone);
                // console.log('data', ...respone);
            } catch (error) {
                console.log('Failed to fetch api', error);
            }
        })()
    }, [])
    return (
        <div>

        </div>
    );
}

export default Navbar;