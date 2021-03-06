import React, {useState, useContext} from 'react'
import './newPost.css'
import newPostImage from '../../assets/images/vinhHaLong.jpg'
import { Context } from '../../context/Context';
import axios from 'axios';
export default function NewPost() {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState("");
    const [price, setPrice] = useState(0);
    const [size, setSize] = useState(0);
    const [codeProduct, setCodeProduct] = useState("")


    const {user} = useContext(Context);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc,
            price,
            size, 
            codeProduct,
        };

        console.log('user name',newPost.username)

        if(file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
                await axios.post("/upload", data);
            } catch (error) {
                
            }
        }
        try {
            const res = await axios.post('/posts', newPost);
            window.location.replace("/post/" + res.data._id)
        } catch (error) {
            
        }
    }

    return (
        <div className="newPost">
            <div className="newPost__header">
               {file && (
                    <img src= {URL.createObjectURL(file)} alt="" className="newPost__img" />
               )}
            </div>

         <form onSubmit= {handleSubmit}>
            <div className="newPost__form  from-group">
                    <label htmlFor="fileInput" className="newPost__button">
                        <i class="fas fa-plus-circle"></i> 
                    </label>
                    <input type="file" id='fileInput' style = {{display: 'none'}}
                        onChange={e => setFile(e.target.files[0])}
                    />
                    <div className="form-group">
                        <input className='inputnewPost' placeholder="title"
                        onChange= {e => setTitle(e.target.value)}
                        ></input>
                    </div>
                    <div className="form-group">
                        <input className='inputnewPost' placeholder="description product"
                            onChange= {e => setDesc(e.target.value)}
                        ></input>
                    </div>
                    <div className="form-group">
                        <input className='inputnewPost' placeholder="prices: 2$"
                            onChange= {e => setPrice(e.target.value)}
                        ></input>
                    </div>
                    <div className="form-group">
                        <input className='inputnewPost' placeholder="size: 42"
                            onChange= {e => setSize(e.target.value)}
                        ></input>
                    </div>
                    <div className="form-group">
                        <input className='inputnewPost' placeholder="codeProduct: A123"
                            onChange= {e => setCodeProduct(e.target.value)}
                        ></input>
                    </div>
                    
                </div>
                <div className="newPost__publish-btn">
                <button className=" btn btn-info" type="submit">Publish</button>
            </div>
         </form>

            
        </div>
    )
}
