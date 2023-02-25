<template>
    <div>
        <table class="table table-striped table-hover table-dark">
            <thead>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>CellPhone</th>
                <th>Email</th>
                <th>Profile</th>
                <th>Edit/Delete</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user">
                    <td>{{ user.userID }}</td>
                    <td>{{ user.firstName }}</td>
                    <td>{{ user.lastName }}</td>
                    <td>{{ user.gender }}</td>
                    <td>{{ user.cellphoneNumber }}</td>
                    <td>{{ user.emailAdd }}</td>
                    <td>{{ user.userProfile }}</td>
                    <td>
                        <router-link :to="{name: 'edit', params: {id:user.userID}}" class="btn btn-success">Edit</router-link>
                       
                        <button class="btn btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import {useStore} from 'vuex';
import {computed} from '@vue/runtime-core';

export default{
     setup(){
         const store = useStore();
         
         store.dispatch("fetchUsers");

        let users = computed(() => store.state.users);

        users = computed(() => store.state.users);

        return{
            users,
        }
     
    },
    
}
</script>