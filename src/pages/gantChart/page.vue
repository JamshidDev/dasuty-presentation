<script setup>
import { ref } from "vue"
import {UIPageContent} from "@/components/index.js"
import {GGanttChart} from "@infectoone/vue-ganttastic"

const modules = [
  {
    name:"Modul",
    row:[ {
      myBeginDate: "2021-07-01 12:00",
      myEndDate: "2021-07-03 19:00",
      ganttBarConfig: {
        id: "unique-id-1",
        label: "Lorem ipsum dolor"
      }
    }]
  },
  {
    name:"Modul",
    row:[ {
      myBeginDate: "2021-07-04 13:00",
      myEndDate: "2021-07-08 19:00",
      ganttBarConfig: {
        id: "unique-id-1",
        label: "Lorem ipsum dolor"
      }
    }]
  },
  {
    name:"Modul",
    row:[ {
      myBeginDate: "2021-07-09 13:00",
      myEndDate: "2021-07-13 19:00",
      ganttBarConfig: {
        id: "unique-id-1",
        label: "Lorem ipsum dolor"
      }
    }]
  },
  {
    name:"Modul",
    row:[ {
      myBeginDate: "2021-07-16 13:00",
      myEndDate: "2021-07-20 19:00",
      ganttBarConfig: {
        id: "unique-id-1",
        label: "Lorem ipsum dolor"
      }
    }]
  },
  {
    name:"Modul",
    row:[ {
      myBeginDate: "2021-07-21 13:00",
      myEndDate: "2021-07-29 19:00",
      ganttBarConfig: {
        id: "unique-id-1",
        label: "Lorem ipsum dolor"
      }
    }]
  }

]
</script>

<template>
  <UIPageContent>
    <div class="w-full overflow-y-auto pb-4">
      <g-gantt-chart
          class="w-[2000px] ui-custom-gantt-chart"
          chart-start="2021-07-01 12:00"
          chart-end="2021-07-30 12:00"
          precision="day"
          bar-start="myBeginDate"
          bar-end="myEndDate"

      >
        <template v-for="(item,index) in modules" :key="index">
          <g-gantt-row :label="`${item.name } - ${index+1}`" :bars="item.row" />
        </template>

      </g-gantt-chart>
    </div>
  </UIPageContent>
</template>

<style lang="scss">
.ui-custom-gantt-chart{
.g-upper-timeunit, .g-timeunit{
  background-color: #FFFFFF !important;
}

  .g-timeunits-container:last-child{
  }

  .g-gantt-row{
    border: none !important;
  }
}
</style>

