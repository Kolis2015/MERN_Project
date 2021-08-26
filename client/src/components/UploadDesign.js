import React, { useState } from 'react'
import axios from 'axios'

const UploadDesign = () => {

    const [toggleState, setToggleState] = useState(1);
    const [category, setCategory] = useState("Shoes")
    const [gender, setGender] = useState("")
    // const [dress, setdress] = useState("")
    const[season,setSeason] = useState("")
    const [dressCode, setDressCode] = useState("")
    const [designerName, setDesignerName] = useState("")
    const [description, setDescription] = useState("")
    const [designFile, setDesignFile] = useState()
    const [designImage, setDesignImage] = useState()
    const [designThumbnail, setDesignThubmnail] = useState()

    const toggleTab = (index) => {
    setToggleState(index);
    };

    const categoriesArray = ["Shoes", "Tshirt", "Shirts", "Pants", "Dress"]

    

    const designHandler = (e) => {
        e.preventDefault()

        const newDesign = {
            category,
            gender,
            season,
            dressCode,
            designerName,
            description,
            // designFile,
            // designImage,
            // designThumbnail
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
    <div className="tabscontainer">
    <div className="bloc-tabs">
        <button
        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(1)}
        >
        Upload Design
        </button>
        <button
        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(2)}
        >
        Manage Design
        </button>
        <button
        className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(3)}
        >
        Find New Gig
        </button>
    </div>

    <div className="content-tabs">
        <div
        className={toggleState === 1 ? "content  active-content" : "content"}
                >
                <form onSubmit = {(e)=>{designHandler(e)}}>
                <label>Category</label>
                    <select className="category"  value={category} onChange={(e) => setCategory(e.target.value)} >
                        <option  value=""></option>
                        {
                                categoriesArray.map((type, index) =>
                                (<option key={index} value={type}>{type}</option>)
                            )
                        }
                    </select>
                    <div className="radioDiv ">
                        <label className = "designerLabel" >Gender Specific Design</label>
                        <input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} />
                        <label  >Female</label>
                        <input type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} />
                        <label >Male</label>
                        <input type="radio"  name="gender" value="Unisex" onChange = {(e) => setGender(e.target.value)}/>
                        <label  >Unisex</label>
                        
                    </div>
                    <div className="radioDiv ">
                        <label className = "designerLabel">Season Specific Design</label>
                        <input type="radio" name="season" value="Winter" onChange={(e) => setSeason(e.target.value)} />
                        <label  >Winter</label>
                        <input type="radio" name="season" value="Spring" onChange={(e) => setSeason(e.target.value)} />
                        <label >Spring</label>
                        <input  type="radio"  name="season" value="Summer" onChange = {(e) => setSeason(e.target.value)}/>
                        <label >Summer</label>
                        <input type="radio"  name="season" value="Fall" onChange = {(e) => setSeason(e.target.value)}/>
                        <label >Fall</label>
                        
                    </div>
                    <div className="radioDiv">
                        <label className = "designerLabel" >Dress Code</label>
                        <input type="radio" name="dress" value="Formal" onChange={(e) => setDressCode(e.target.value)} />
                        <label >Foraml</label>
                        <input type="radio" name="dress" value="Casual" onChange={(e) => setDressCode(e.target.value)} />
                        <label  >Casual</label>
                        <input type="radio"  name="dress" value="Athletic" onChange = {(e) => setDressCode(e.target.value)}/>
                        <label  >Athletic</label>
                        <input type="radio"  name="dress" value="Occasional" onChange = {(e) => setDressCode(e.target.value)}/>
                        <label  >Occasional</label>
                        <input type="radio"  name="dress" value="Other" onChange = {(e) => setDressCode(e.target.value)}/>
                        <label  >Other</label>
                        
                        
                    </div>
                    <div className = "designerDiv ">
                        <label className = "designerLabel">Designer Name</label>
                        <input type="text" value={designerName} onChange ={(e) => setDesignerName(e.target.value)} />
                    </div>
                    <div className="designerDescription">
                        <label className = "designerLabel labelHeight" >Description</label>
                        <textarea value={description} placeholder="500 Characters max"rows="3" cols="60" onChange ={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className="fileContainer">
                        <label className="fileLabel" >Upload Design file</label>
                        <input type="file" onChange = {(e) => setDesignFile(e.target.files[0])} />
                        <button className="designerSelected">Select</button>
                    </div>
                    <div className="fileContainer">
                        <label className = "fileLabel">Upload Design Image</label>
                        <input type="file" onChange = {(e) => setDesignImage(e.target.files[0])} />
                        <button className="designerSelected">Select</button>
                    </div>
                    <div className="fileContainer">
                        <label className = "fileLabel">Upload Design Thumbnail</label>
                        <input type="file" onChange = {(e) => setDesignThubmnail(e.target.files[0])} />
                        <button className="designerSelected">Select</button>
                    </div>
                    <button type="submit" className ="uploadDesign" >Upload Design</button>
                </form>
                
        </div>

        <div
        className={toggleState === 2 ? "content  active-content" : "content"}
        >
        <h2>Content 2</h2>
        
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
        </p>
        </div>

        <div
        className={toggleState === 3 ? "content  active-content" : "content"}
        >
        <h2>Content 3</h2>
        
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
        </p>
        </div>
    </div>
    </div>
    )
}

export default UploadDesign
