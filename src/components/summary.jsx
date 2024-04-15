
function Summary({sumCallback}) {
    function getSummary() {
            const name = document.querySelector('#fname').value;
            const number = document.querySelector('#number').value;
            const email = document.querySelector('#email').value;
            const role = document.querySelector('#role').value;
            const site = document.querySelector('#site').value;
            const summary = document.querySelector('#summ').value;
            sumCallback({name, mail: email, phone: number, title:role, website: site, summary});
    }
    return (
            <div>
                <div className="ip-group">
                    <input type="text" name="fname" id="fname" placeholder="Full Name" onChange={getSummary}/>
                    <input type="tel" name="number" id="number" placeholder="Mobile Number" onChange={getSummary}/>
                    <input type="email" name="email" id="email" placeholder="Email" onChange={getSummary}/>
                    <input type="text" name="role" id="role" placeholder="Role or position" onChange={getSummary}/>
                    <input type="text" name="site" id="site" placeholder="Website (if any)" onChange={getSummary}/>
                    <textarea name = "summary" id = "summ" cols = "35" rows = "3" placeholder="Describe Yourself" onChange={getSummary}></textarea >
                    <button type="submit" className="submit" onClick={getSummary}>Submit</button>
                </div>
            </div>  
    );
}

export default Summary;