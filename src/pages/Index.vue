<template>

  <div class="q-pa-md row items-start justify-between">
    <CardConcurso v-for="loteria of tipoLoteria"
      :key="loteria.id"
      :title="loteria.title"
      :tpLoteria="loteria.tpLoteria"
    />
  </div>
</template>

<script>
import {CardConcurso, LOTERIAS} from '../components/index.js';

export default {
  name: 'PageIndex',
  components: {
    CardConcurso
  },

  data() {
    return {
      tipoLoteria: [
        {id:1,title:'MegaSena',tpLoteria: LOTERIAS.MEGASENA.tpLoteria},
        {id:3,title:'Lotofácil',tpLoteria: LOTERIAS.LOTOFACIL.tpLoteria},
        // {id:2,title:'Dia de Sorte',classBg:'bg-diadesorte',uri:'/megasena',color:'light-green'},
        // {id:4,title:'Loteria Federal',classBg:'bg-loteriafederal',uri:'/megasena',color:'indigo'},
        // {id:5,title:'Lotomania',classBg:'bg-lotomania',uri:'/megasena',color:'amber-6'},
        // {id:6,title:'Timemania',classBg:'bg-timemania',uri:'/megasena',color:'orange-10'},
        // {id:7,title:'Dupla Sena',classBg:'bg-duplasena',uri:'/megasena',color:'deep-orange-4'},
        // {id:8,title:'Loteca',classBg:'bg-loteca',uri:'/megasena',color:'pink-10'},
        // {id:9,title:'Quina',classBg:'bg-quina',uri:'/megasena',color:'light-blue-6'},
        // {id:10,title:'Lotogol',classBg:'bg-lotogol',uri:'/megasena',color:'blue-grey-5'}
      ]
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

