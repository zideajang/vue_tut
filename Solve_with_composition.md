



```vue
<template>
<div class="container">
  <input class="input" type="text"/>
  <button class="button is-primary center">Search</button>
</div>

</template>

<script>
export default {
  
  name: 'App',
  components:{},
  setup(){}
}
</script>
```



https://docs.thecatapi.com/



```vue
<template>
<div class="container">
  <input v-model="query" class="input" type="text"/>
  <button class="button is-primary center">Search</button>
</div>

</template>

<script>
import { ref } from 'vue'
export default {
  
  name: 'App',
  components:{},
  setup(){
    const query = ref('')
    return{
      query
    }
  }
}
</script>
```



```vue
<template>
<div class="container">
  <p  class="box" v-if="error">
    Oops! something went wrong! please try again
  </p>
  <input v-model="query" class="input" type="text"/>
  <button @click="callApi" class="button is-primary center">Search</button>
  <p v-if="loading" class="box">Loaiding </p>

  <div v-else-if="result" class="card-image">
    <figure class="image is-4by3">
      <img :src="result" alt="Placeholder image">
    </figure>
  </div>
</div>

</template>

<script>
import { ref } from 'vue'
import axios from 'axios';
export default {
  
  name: 'App',
  components:{},
  setup(){
    const query = ref('');
    const result = ref('');
    const error = ref(false);
    const loading = ref(false);

    const callApi = async()=>{
      error.value = false
      loading.value = true

      try{
        const res = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${query.value}`);
        result.value = res.data[0].url
      }catch{
        error.value = true
      }finally{
        loading.value = false
      }
    }

    return{
      query,
      result,
      callApi,
      loading,
      error
    }
  }
}
</script>
```

