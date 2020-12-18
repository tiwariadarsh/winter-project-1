const initialState = {
    productsInCart:[],
    products:[
        {
            "pId":1,
            "ownId":91,
            "shopId":51,
			"imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
			"name": "CHECK PRINT SHIRT",
            "price": 1100,
            "discount": 20,
            "rating":4.2,
            "ratedBy":467,
            "reviewedBy":173,
            "emiAvailable":false,
            "inStock":true,
            "inCart":false,
            "numberOfItems":0,
            "altImages":[
                {"imgUrl":"https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
            "aId":101},
                {"aId":102,"imgUrl":"https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0"},
                {"aId":103,"imgUrl":"http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0"},
                {"aId":104,"imgUrl":"https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0"}],
            
           "info":"Lorem Ipsum is simply dummy stry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
		},
		{
            "pId":2,
            "ownId":92,
            "shopId":52,
			"imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
			"name": "GLORIA HIGH LOGO SNEAKER",
            "price": 9100,
            "discount": 39,
            "rating":4.0,
            "ratedBy":293,
            "reviewedBy":456,
            "emiAvailable":true,
            "inStock":true,
            "inCart":false,
            "numberOfItems":0,
            "altImages":[
                {"imgUrl":"https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
            "aId":101},
                {"aId":102,"imgUrl":"https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0"},
                {"aId":103,"imgUrl":"http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0"},
                {"aId":104,"imgUrl":"https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0"}],
            
            "info":"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in"
		},
		{
            "pId":3,
            "ownId":93,
            "shopId":53,
			"imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
			"name": "CATE RIGID BAG",
            "price": 5470,
            "discount": 16,
            "rating":4.6,
            "ratedBy":79,
            "reviewedBy":25,
            "emiAvailable":true,
            "inStock":true,
            "inCart":false,
            "numberOfItems":0,
            "altImages":[
                {"imgUrl":"https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
            "aId":101},
                {"aId":102,"imgUrl":"https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0"},
                {"aId":103,"imgUrl":"http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0"},
                {"aId":104,"imgUrl":"https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0"}],
            
            "info":"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure."
		},
		{
            "pId":4,
            "ownId":94,
            "shopId":54,
			"imgUrl": "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
			"name": "GUESS CONNECT WATCH",
            "price": 4389,
            "discount": 25,
            "rating":3.8,
            "ratedBy":501,
            "reviewedBy":198,
            "emiAvailable":true,
            "inStock":true,
            "inCart":false,
            "numberOfItems":0,
            "altImages":[
                {"imgUrl":"https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
            "aId":101},
                {"aId":102,"imgUrl":"https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0"},
                {"aId":103,"imgUrl":"http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0"},
                {"aId":104,"imgUrl":"https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0"}],
            
            "info":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
		},
		{
            "pId":5,
            "ownId":95,
            "shopId":55,
			"imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
			"name": "'70s RETRO GLAM KEFIAH",
            "price": 12000,
            "discount": 9,
            "rating":4.6,
            "ratedBy":289,
            "reviewedBy":188,
            "emiAvailable":true,
            "inStock":false,
            "inCart":false,
            "numberOfItems":0,
            "altImages":[
                {"imgUrl":"https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
            "aId":101},
                {"aId":102,"imgUrl":"https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0"},
                {"aId":103,"imgUrl":"http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0"},
                {"aId":104,"imgUrl":"https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0"}],
            
           "info":"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
		}

    ]
}

const rootReducer = (state = initialState, action) => {
    if(action.type ==='UPDATE_IMAGE'){
        state.products.forEach((product)=>{
            if(product.pId === action.object.productId){
                product.altImages.forEach((img)=>{
                    if(img.aId === action.object.imageId){
                        let flag = img.imgUrl;
                        img.imgUrl = product.imgUrl;
                        product.imgUrl = flag;
                    }
                })
            }
            let products = state.products;
            let productsInCart = state.productsInCart;
            return { products, productsInCart };
        });
    }
    if(action.type === 'ADD_TO_CART'){

        state.products.forEach((product) => {
            if(product.pId === action.id){
                let inCart = [...state.productsInCart, product]
                state.productsInCart = inCart;
                product.inCart = true;
                product.numberOfItems = 1;
            }
        });
        console.log(state);
        let products = state.products;
        let productsInCart = state.productsInCart;
        return { products, productsInCart };
    }

    if(action.type === 'UPDATE_CART'){
        state.products.forEach((product) => {
            if(product.pId === action.id){
                product.numberOfItems = 0;
                product.inCart = false;
                console.log('success');
            }
        });

        let productsInCart = state.productsInCart.filter(product => action.id !== product.pId);
        let products = state.products;

        return {products, productsInCart}
    }

    if(action.type === 'SUBSTRACT_ITEM'){
        let p = state.productsInCart.map((prod) => {
            if(prod.pId === action.id){
                prod.numberOfItems = prod.numberOfItems-1;
            }
            if(prod.numberOfItems > 0)
                return prod

            else 
                prod.inCart = false;    
        });
        p = p.filter(m => m!==undefined)   
        return {
            ...state,
            productsInCart:p
        }
    }

    if(action.type === 'ADD_ITEM'){
        let p = state.productsInCart.map((product) => {
            if(product.pId === action.id){
                product.numberOfItems = product.numberOfItems+1;
            }
            return product
        });
        return {
            ...state,
            productsInCart:p
        }
    }


    return state;
}

export default rootReducer;