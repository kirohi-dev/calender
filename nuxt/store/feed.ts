import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

@Module({
  stateFactory: true,
  name: 'feed',
  namespaced: true
})
export default class Feed extends VuexModule {
  posts: number = 0;

  @Mutation
  increment() {
    this.posts += 1;
  }

  @Action
  incr() {
    this.increment();
  }
}
