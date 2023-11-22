
import Subtitle from "../../../Component/Subtitle/Subtitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";


const PopularMenu = () => {


    const [menu] = useMenu()
    const popularItem = menu.filter(item =>item.category === "popular")


    return (
        <section className="mb-12">
       <Subtitle  subHeading={"Check it out"}
            heading={"FROM OUR MENU"}>
            </Subtitle>

            <div className="grid md:grid-cols-2 gap-10">
                {
                    popularItem.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        
        <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
    </section>
    );
};

export default PopularMenu;