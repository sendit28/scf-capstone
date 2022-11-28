# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

5. times do
  user = User.create(Faker::Internet.user('username', 'email', 'password'))

  10. times do
    post = Post.create(
      user_id: user.id,
      title: Faker::Hipster.sentence,
      description: Faker::Hipster.paragraph_by_chars(characters: 500)
      # date: Faker::Date.between(from: '2022-01-01', to: '2022-12-25')
    )
  
    5. times do
      user_post_comment = UserPostComment.create(
        comment: Faker::Hipster.paragraph_by_chars(characters: 250),
        # date: Faker::Date.between(from: '2022-01-01', to: '2022-12-25'),
        user_id: user.id,
        post_id: post.id
      )
    end

    category = Category.create(description: "code")
    PostCategory.create(post_id: post.id, category_id: category.id)
  end
end

