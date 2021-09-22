import './../Css/footer.css'

const Footer = () => 
{
    return (
            <>
                <footer className="page-footer font-small blue" id="Footer">
                    <div className="footer-copyright text-center py-3">
                        <a href="https://www.facebook.com/">facebook</a>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="https://twitter.com/?lang=en">twitter</a>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="https://in.linkedin.com/"> linkedin </a>
                        &nbsp;&nbsp;&nbsp;&nbsp; 
                        <a href="https://www.instagram.com/">instagram </a>
                        &nbsp;&nbsp;&nbsp;&nbsp; 
                        <a href="https://www.tumblr.com/">tumblr</a>
                        <br/><br/>
                        Terms
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        Conditions
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        Privacy
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        Support
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        Jobs
                        <br/><br/>
                        © 2021-2022 Copyright:&nbsp;&nbsp;&nbsp;<a href="https://accio.com/">Accio.com </a>
                    </div>
                </footer>
            </>    
            );
}

export default Footer;