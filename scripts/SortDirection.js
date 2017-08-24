import { Enum } from 'enumify';

class SortDirection extends Enum {}

SortDirection.initEnum(['ASC', 'DESC']);

export default SortDirection;
