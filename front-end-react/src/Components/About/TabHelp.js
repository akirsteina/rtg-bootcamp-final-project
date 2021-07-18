
import image from '../../Assets/Images/cacti.jpg';
function TabHelp() {

    return (
        <div className="row">
            <div className="col-12 col-lg-6 p-5">
                <h3 className="about-title special-title pb-3">
                    What can you do to help?
                </h3>
                <p className="lead">
                    <ul>
                        <li>Typewriter viral dreamcatcher poke, portland chia fingerstache austin wayfarers neutra.</li>
                        <li>Ennui waistcoat seitan banjo shaman adaptogen sriracha gastropub sustainable cloud bread.</li>
                        <li>Glossier butcher flexitarian, street art chartreuse migas cronut put a bird on it XOXO swag skateboard artisan distillery. XOXO wolf bitters whatever. Hella tote bag 3 wolf moon knausgaard wolf you probably haven't heard of them hammock twee yuccie crucifix pabst lumbersexual waistcoat iPhone migas.</li>
                        <li>Listicle lomo typewriter, artisan thundercats hell of locavore health goth banh mi jianbing.</li>
                    </ul>
                </p>
            </div>
            <div className="col-12 col-lg-6 help-wrapper">
                <img className="img-fluid rounded" alt="" src={image}/>
            </div>
            
        </div>
    )
}

export default TabHelp;