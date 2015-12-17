# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!({ username: 'proto-typist', password: 'typing' })

Source.create!([{
    title: 'telekinesis',
    body: "In fact, wrong notes always have a cause. An immediate physical cause. Just before you play a wrong note, your fingers were in a position that made that wrong note inevitable. Fixing wrong notes isn't about 'practicing harder' but about trying to unkink those systematically error-causing fingerings and hand motions."
  },
  {
    title: 'bugs',
    body: "Once you start to think of mistakes as deterministic rather than random, as caused by 'bugs' (incorrect understanding or incorrect procedures) rather than random inaccuracy, a curious thing happens."
  }])
