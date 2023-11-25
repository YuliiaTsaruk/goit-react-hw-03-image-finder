import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImgs } from './Api';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    gallery: [],
    query: '',
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      const searchValue = query.split('/');
      const newQuery = searchValue[1];

      try {
        const images = await fetchImgs(newQuery);
        console.log(images);
        this.setState({ gallery: images.hits });
      } catch (error) {
        console.error('Error in fetch:', error);
      }
      // ОТРЕЗАТЬ ID ЗАПРОСА ИЗ QUERY
      // делаем http запрос с query и page
      // записываем результат в images
    }
  }

  onSubmit = evt => {
    evt.preventDefault();
    const inputValue = evt.target.elements.query.value;

    this.setState({
      query: `${Date.now()}/${inputValue}`,
      page: 1,
      gallery: [],
    });
  };

  // handleLoadMore = () => {
  //   this.setState(prevState => {
  //     return {
  //       page: prevState.page + 1,
  //     };
  //   });
  // };

  render() {
    const gallery = this.state.gallery;
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />

        <ImageGallery items={gallery} />

        <button onClick={this.handleLoadMore}>Load more</button>
      </div>
    );
  }
}
