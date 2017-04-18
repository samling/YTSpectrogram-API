module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate('Sample', function(err) {
    if (err) throw err;

    //app.models.Sample.create([{
    //  Hash: 'Bel Cafe',
    //  SampleData: 'Vancouver'
    //}, {
    //  Hash: 'Three Bees Coffee House',
    //  SampleData: 'San Mateo'
    //}, {
    //  Hash: 'Caffe Artigiano',
    //  SampleData: 'Vancouver'
    //}, ], function(err, coffeeShops) {
    //  if (err) throw err;

    //  console.log('Models created: \n', coffeeShops);
    //});
  });
};
