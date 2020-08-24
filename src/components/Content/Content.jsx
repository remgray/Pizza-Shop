import React, {useCallback, useEffect} from "react";
import {Categories, SortItems, PizzaBlock, PizzaLoadingBlock} from "../index";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../../redux/actions/filters";
import {fetchPizzas} from "../../redux/actions/pizzas";

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const sortItems = [
	{type: 'rating', name: 'популярности', order: 'desc'},
	{type: 'price', name: 'цене', order: 'desc'},
	{type: 'name', name: 'алфавиту', order: 'asc'}
	];

const Content = () => {
	const items = useSelector(({pizzas}) => pizzas.items);
	const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
	const { category, sortBy } = useSelector(({filters}) => filters)

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPizzas(category, sortBy));
	}, [category, sortBy]);


	const onSelectCategory = useCallback((index) => {
		dispatch(setCategory(index));
	}, [])

	const onSelectSortType = useCallback((type) => {
		dispatch(setSortBy(type));
	}, [])


	return (
		<div className="container">
			<div className="content__top">
				<Categories
					activeCategory={category}
					onClickCategory={onSelectCategory}
					items={categoryNames}/>
				<SortItems activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType}/>
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{isLoaded
					?	items.map(obj => (<PizzaBlock key={obj.id} isLoading={true} {...obj}/>))
					: Array(12).fill('')
						.map((_, index) => <PizzaLoadingBlock key={index} />)}
			</div>
		</div>
	)
}

export default Content;