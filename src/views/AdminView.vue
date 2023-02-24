<template>
    <div>
        <table class="table table-striped table-hover">
            <thead>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>CellPhone</th>
                <th>Email</th>
                <th>Profile</th>
                <th>Join Date</th>
                <th>Edit/Delete</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user">
                    <td>{{ user.userID }}</td>
                    <td>{{ user.firstName }}</td>
                    <td>{{ user.lastName }}</td>
                    <td>{{ user }}</td>
                    <td>{{ user }}</td>
                    <td>{{ user }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import {useStore} from 'vuex';
// import {computed} from '@vue/runtime-core';

export default{
     setup(){
        // const store = useStore();
        // const users = computed( async () => await store.dispatch("fetchUsers").then(res=>res))
        // console.log(users)
    },
    async mounted(){
        const store = useStore();
        const users = await store.dispatch("fetchUsers").then(res => console.log(res))
        console.log(users)
        return{
        users
        }
    }
    
}
</script>