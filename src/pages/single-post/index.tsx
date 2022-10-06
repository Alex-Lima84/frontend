import "./styles.scss";
import stockImage from "../../assets/images/stock-image.jpg";
import userImage from "../../assets/images/user-image.png";
import editLogo from "../../assets/images/edit.png";
import deleteLogo from "../../assets/images/delete.png";
import { Link } from "react-router-dom";
import { Menu } from "../../components/menu";

export const SinglePost = () => {
  return (
    <div className="single-post-container">
      <div className="content-container">
        <img src={stockImage} />
        <div className="user-container">
          <img src={userImage} />
          <div className="info-container">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit-container">
            <Link to={`/write-post?edit=2`}>
              <img src={editLogo} />
            </Link>
            <img src={deleteLogo} />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia error
          sit quaerat labore nobis eligendi vel provident quibusdam. Repellat
          culpa corporis vero nesciunt consectetur dolore natus laborum
          repudiandae id blanditiis. Porro error ducimus maxime aliquid odit,
          sequi eveniet saepe expedita aperiam eum distinctio esse fugiat omnis
          velit illum atque dicta. Odio ratione quos obcaecati veritatis culpa
          repellat consequuntur minus sunt? Doloremque pariatur inventore vero
          maiores a eligendi. Quia quasi quis nisi dolorum accusamus nobis
          cumque deleniti perspiciatis fugit maxime asperiores ex perferendis
          eaque, dicta impedit eum dolorem officiis labore blanditiis?
          Repellendus optio laboriosam corporis, vero mollitia earum error
          voluptatibus aliquam quia voluptatum porro praesentium voluptates
          dicta cumque cum quae expedita. Optio nobis consectetur suscipit ab
          qui similique iste ipsa dolor? Expedita provident ducimus nulla dolor
          illo voluptatum sapiente veniam, nesciunt repellat atque. Dolorem
          dolores fugiat officia explicabo tempora voluptas, autem ratione esse
          commodi suscipit laborum incidunt architecto aliquid nam odit! Labore
          quisquam tempore maxime minima dolore dolores quod reprehenderit unde
          eaque, harum molestias animi fugiat architecto asperiores debitis,
          voluptate voluptas ipsa. Tempora ratione ipsa enim sapiente id culpa
          molestiae officiis. Exercitationem, earum! Deserunt corrupti,
          aspernatur quae mollitia, quam, adipisci vitae odio id labore ex a
          doloremque amet? Voluptatem consequuntur, optio nam odio qui fugiat,
          voluptas dolor libero repellendus, fugit impedit? Expedita mollitia
          odio accusantium iure dolorum magnam adipisci veritatis fuga
          praesentium voluptate velit reprehenderit eligendi, omnis enim, quam
          architecto atque quo molestias. Dignissimos hic autem veniam doloribus
          dolore obcaecati asperiores! Debitis obcaecati inventore voluptatum
          repellendus ducimus illo at sunt aut ex recusandae eum dolores aliquid
          fugiat, quo ut expedita modi nobis totam architecto placeat, fuga,
          sequi sapiente in. Repellendus, libero? Assumenda et quisquam
          molestias sequi asperiores illum saepe tempore at corrupti, delectus
          maxime pariatur debitis dolorem aut nostrum deserunt magnam id
          aspernatur odio porro, dolorum voluptatum vero iure tenetur? Ullam.
          Fugit impedit eveniet quo odit rerum at, optio soluta asperiores eaque
          harum ducimus assumenda tempore earum iste deserunt, minima, unde
          inventore excepturi sequi accusamus beatae esse praesentium illo?
          Labore, rerum. Dolore alias eligendi, officia consequatur provident
          quo id voluptatum, delectus possimus placeat eaque fugiat voluptatibus
          adipisci ipsa quibusdam iusto quasi? Ea alias placeat repellendus
          sapiente consequuntur rerum reprehenderit nostrum nemo. Dolorum, saepe
          quaerat exercitationem odio nulla repudiandae ad omnis reprehenderit
          et ipsam error! Soluta officiis nihil ipsum quae doloremque eveniet
          nemo numquam. Doloremque unde cum culpa ratione ullam sed illum. Vero
          quasi omnis accusantium! Totam quisquam dolorum ad iure. Commodi minus
          minima error ad non quidem quos doloremque, iure tempora eaque, et
          voluptate illo suscipit voluptas consequatur consequuntur modi magnam?
          Praesentium ullam corporis voluptates, unde saepe esse consequatur.
          Consequatur alias voluptate mollitia omnis numquam et, fugiat eos
          officia rem accusamus sequi fuga est quasi illum dolorum fugit
          eligendi vitae labore! Maxime, nostrum necessitatibus eos et mollitia
          autem, libero ea at excepturi consequatur, omnis commodi unde eum
          ullam non perspiciatis assumenda itaque fuga. Quibusdam rem explicabo
          commodi provident ea aperiam consectetur? Consectetur, velit.
        </p>
      </div>
      <Menu />
    </div>
  );
};
