
post_images = [
  "https://www.rd.com/wp-content/uploads/2020/04/GettyImages-1093840488-5-scaled.jpg",
  "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
  "https://cdn01.pinkoi.com/product/f5NwVEkf/0/3/640x530.jpg",
  'https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp'
]

Category.create(description: "Tech")
Category.create(description: "Art")
Category.create(description: "Sports")
Category.create(description: "Music")

5. times do
  user = User.create(Faker::Internet.user('username', 'email', 'password'))

  10. times do
    post = Post.create(
      user_id: user.id,
      title: Faker::Hipster.sentence,
      description: Faker::Hipster.paragraph_by_chars(characters: 1000),
      img_url: post_images.sample
    )
  
    5. times do
      user_post_comment = UserPostComment.create(
        comment: Faker::Hipster.paragraph_by_chars(characters: 250),
        user_id: user.id,
        post_id: post.id
      )
    end

    PostCategory.create(post_id: post.id, category_id: Category.all.sample.id)
  end
end

