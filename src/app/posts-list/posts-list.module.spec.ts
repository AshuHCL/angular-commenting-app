import { PostsListModule } from './posts-list.module';

describe('PostsListModule', () => {
  let postsListModule: PostsListModule;

  beforeEach(() => {
    postsListModule = new PostsListModule();
  });

  it('should create an instance', () => {
    expect(postsListModule).toBeTruthy();
  });
});
