import uploadShopData from '../../utils/firebase/firebase.utils'; 

const Admin =  () => { 
    const handleUpload = async () => {
        await uploadShopData () 
    }
    return (
        <div>
            <h1>admin panel</h1>
            <button onClick={handleUpload}>upload Shop data</button>
        </div>
    )
}

export default Admin ; 