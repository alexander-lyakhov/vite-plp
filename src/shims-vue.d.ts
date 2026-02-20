// shims-vue.d.ts
import { ComponentCustomProperties } from 'vue';

declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

