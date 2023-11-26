import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImgs } from './Api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    gallery: [],
    query: '',
    page: 1,
    totalPages: null,
    isLoading: false,
    error: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      const searchValue = query.split('/');
      const newQuery = searchValue[1];

      try {
        this.setState({ isLoading: true });

        const { hits, totalHits } = await fetchImgs(newQuery, page);

        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...hits],
          totalPages: Math.ceil(totalHits / 12),
          isLoading: false,
          error: false,
        }));
      } catch (error) {
        console.error('Error in fetch:', error);
        this.setState({ error: true, isLoading: false });
      }
    }
  }

  onSubmit = evt => {
    evt.preventDefault();
    const inputValue = evt.target.elements.query.value;

    this.setState({
      query: `${Date.now()}/${inputValue}`,
      gallery: [],
      page: 1,
      totalPages: null,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { gallery, page, totalPages, isLoading, error } = this.state;
    const galleryLength = gallery.length !== 0;
    const lastPage = totalPages === page;

    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />

        {isLoading && <Loader />}

        {error && (
          <p>Oops! Something went wrong! Please try reloading this page!</p>
        )}

        {galleryLength && <ImageGallery items={gallery} />}

        {galleryLength &&
          (!lastPage ? (
            <Button onClick={this.handleLoadMore} name={'Load more'}></Button>
          ) : (
            <p>Sorry! It`s the end of search, you reviewed all results.</p>
          ))}
      </div>
    );
  }
}
