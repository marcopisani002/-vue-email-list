const { createApp } = Vue;

const app = createApp({
  data () {
    return {

      listaMail: []
    };
  },
  methods: {
    fetchData () {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((resp) => {
          this.listaMail = resp.data;
        });
  
     
     
    },
    
  },
  mounted () {
    
  }
}).mount('#app');