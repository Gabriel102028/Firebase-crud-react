import React, { useEffect } from 'react';
import LinkForm from './LinkForm';
import { db } from '../firebase'

const Links = () => {

    const addOrEditLink = async (linkObject) => {
        await db.collection('links').doc().set(linkObject)
        console.log('new task added!')
    }

    const getLinks = async () => {
        db.collection('links').onSnapshot((querySnapshot) => {

            querySnapshot.forEach(doc => {
                console.log(doc.data())
            })
        });
    }

    useEffect(() => {
        getLinks();
    }, []);


    return <div className="container p-4">
        <div className="row">
            <LinkForm addOrEditLink={addOrEditLink} />
            <h1>-</h1>
        </div>
    </div>
}

export default Links;