import React, { useState } from 'react'
import axios from 'axios'

const UploadDesign = () => {

    const [category, setCategory] = useState("Shoes")
    const [gender, setGender] = useState("")
    const [dress, setdress] = useState("")
    const [dressCode, setDressCode] = useState("")
    const [designerName, setDesignerName] = useState("")
    const [description, setDescription] = useState("")
    const [designFile, setDesignFile] = useState()
    const [designImage, setDesignImage] = useState()
    const [designThumbnail, setDesignThubmnail] = useState()

    const categoriesArray = ["Shoes", "T-shirt", "Shirts", "Pants", "Dress"]

    const designHandler = (e) => {
        e.preventDefault()

        const newDesign = {
            category,
            gender,
            dress,
            dressCode,
            designerName,
            description,
        }
        
        const formData = new FormData();
        formData.append('designFile', designFile)
        formData.append('designImage', designImage)
        formData.append('designThumbnail', designThumbnail)
        formData.append('designData', new Blob([JSON.stringify(newDesign)], {
            type: "application/json"
        }));
    
        axios.post("http://localhost:8000/api/Design/", formData,
        {
            withCredentials: true,
            headers: {
                'Content-Type':'multipart/form-data'
            }
        })
            .then((res) => {
            console.log("files sucessfully uploaded")
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <form className="frm-upload" onSubmit = {(e)=>{designHandler(e)}}>
            <div className="info-bundle"> 
                <label className="info-bundle-label">Category</label>
                <select className="info-bundle-dropdownbox"  value={category} onChange={(e) => setCategory(e.target.value)} >
                    <option  value=""></option>
                        {
                            categoriesArray.map((type, index) =>
                                (<option key={index} value={type}>{type}</option>)
                            )
                        }
                </select>
            </div>
            <div className="info-bundle"> 
                <label className="info-bundle-label">Gender Specific Design</label>
                <input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)}/>
                <label className="info-bundle-label-light">Female</label>
                <input type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)}/>
                <label className="info-bundle-label-light">Male</label>
                <input type="radio"  name="gender" value="Unisex" onChange = {(e) => setGender(e.target.value)}/>
                <label className="info-bundle-label-light">Unisex</label>
            </div>
            <div className="info-bundle"> 
                <label className="info-bundle-label">Season Specific Design</label>
                <input type="radio" name="season" value="Winter" onChange={(e) => setdress(e.target.value)}/>
                <label className="info-bundle-label-light">Winter</label>
                <input type="radio" name="season" value="Spring" onChange={(e) => setdress(e.target.value)}/>
                <label className="info-bundle-label-light">Spring</label>
                <input type="radio"  name="season" value="Summer" onChange = {(e) => setdress(e.target.value)}/>
                <label className="info-bundle-label-light">Summer</label>
                <input type="radio"  name="season" value="Fall" onChange = {(e) => setdress(e.target.value)}/>
                <label className="info-bundle-label-light">Fall</label>
            </div>
            <div className="info-bundle"> 
                <label className="info-bundle-label">Dress Code</label>
                <input type="radio" name="dress" value="Formal" onChange={(e) => setDressCode(e.target.value)} />
                <label className="info-bundle-label-light">Formal</label>
                <input type="radio" name="dress" value="Casual" onChange={(e) => setDressCode(e.target.value)} />
                <label className="info-bundle-label-light">Casual</label>
                <input type="radio"  name="dress" value="Athletic" onChange = {(e) => setDressCode(e.target.value)}/>
                <label className="info-bundle-label-light">Athletic</label>
                <input type="radio"  name="dress" value="Occasional" onChange = {(e) => setDressCode(e.target.value)}/>
                <label className="info-bundle-label-light">Occasional</label>
                <input type="radio"  name="dress" value="Other" onChange = {(e) => setDressCode(e.target.value)}/>
                <label className="info-bundle-label-light">Other</label>
            </div>
            <div className="info-bundle"> 
                <label className="info-bundle-label">Designer Name</label>
                <input className="info-bundle-textbox" type="text" value={designerName} onChange ={(e) => setDesignerName(e.target.value)} />
            </div>
            <div className="info-bundle"> 
                <label className="info-bundle-label">Description</label>
                <textarea className="info-bundle-textarea" value={description} placeholder="500 Characters max" rows="3" cols="60" onChange ={(e) => setDescription(e.target.value)} />
            </div>
            <br />
            <div className="info-bundle"> 
                <label className="info-bundle-label">Upload Design file</label>
                <input type="file" onChange = {(e) => setDesignFile(e.target.files[0])} />
            </div>
            <div className="info-bundle"> 
                <label className="info-bundle-label">Upload Design Image</label>
                <input type="file" onChange = {(e) => setDesignImage(e.target.files[0])} />
            </div>
            <div className="info-bundle"> 
                <label className="info-bundle-label">Upload Design Thumbnail</label>
                <input type="file" onChange = {(e) => setDesignThubmnail(e.target.files[0])} />
            </div>
            <div className="hold-button-at-right">
                <button className="btn-upload-design" type="submit">Upload Design</button>
            </div>
        </form>
    )
}

export default UploadDesign;