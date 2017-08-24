import { Enum } from 'enumify';

class SortRule extends Enum {}

SortRule.initEnum(['PRICE', 'BEDS', 'SQFT']);

export default SortRule;
