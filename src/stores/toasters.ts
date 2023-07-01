import { onMounted } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

const MStoSecond = (ms: number) => ms * 1000;
const createID = (i: number) => i++;

export const useToasterStore = defineStore("toaster", () => {
  const toasterArray = useStorage("toasterArray", Array<object>);

  type props = {
    id?: number;
    title: string;
    description: string;
    type: string;
    duration: number;
  };

  function addToast(props: props) {
    toasterArray.value.push({
      id: createID(toasterArray.value.length + 1),
      title: props.title.toUpperCase(),
      description: props.description,
      type: props.type,
      duration: MStoSecond(props.duration),
    });

    setTimeout(() => {
      toasterArray.value.shift();
    }, MStoSecond(props.duration));
  }

  onMounted(() => {
    toasterArray.value = [];
  });

  return {
    toasterArray,
    addToast,
  };
});

export default useToasterStore;
