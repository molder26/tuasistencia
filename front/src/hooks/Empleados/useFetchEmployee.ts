import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchAllEmployees } from "../../store/slices/employee/employeeSlice";
import { useEffect, useState } from "react";

export const useFetchEmployee = () => {
	const dispatch = useAppDispatch();
	const employeesState: any = useAppSelector(
		(state) => state.employees.values
	);
	const [employees, setEmployees] = useState(null);
	const [isFetching, setIsFetching] = useState(true);

	useEffect(() => {
		dispatch(fetchAllEmployees()).finally(() => {
			setIsFetching(false);
		});
	}, [dispatch]);

	useEffect(() => {
		setEmployees(employeesState);
	}, [employeesState]);

	return { employees, isFetching };
};
