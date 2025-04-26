import { deleteItem } from "../../../../api/AdminService";

export default async function onDelete(e) {
    let result = confirm("Are you sure you want to delete this item?");
    let id = e.target.id.split(' ')[0]
    let cat = e.target.id.split(' ')[1]

    console.log(id)
    console.log(cat)

    if(result){
        let response = await deleteItem(cat,id);

        if(response.message && response.code != 200){
            alert(response.message);
            return;
        }

        window.location.reload();
    }

}