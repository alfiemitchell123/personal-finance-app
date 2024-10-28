import React, { useState } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { CaretLeft } from "@phosphor-icons/react";
import theme from "~/theme";
import PaginationButton from "./paginationButton";

interface PaginationProps {
    totalTransactions: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
    transactionsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalTransactions, currentPage, setCurrentPage, transactionsPerPage }) => {
    // Calculate total pages
    const totalPages = Math.ceil(totalTransactions / transactionsPerPage);

    const onPageChange = (page: number) => {
        if (page < 1) return;
        if (page > totalPages) return;
        setCurrentPage(page);
    };

    return (
        <Flex
            paddingTop={theme.spacing[300]}
            justify="space-between"
            align="center"
            alignSelf="stretch"
        >

            <PaginationButton
                label="Prev"
                onClick={() => onPageChange(currentPage - 1)}
                isDisabled={currentPage <= 1}
            />

            <Flex align="center" gap={theme.spacing[100]}>
                {[...Array(totalPages)].map((_, index) => (
                    <PaginationButton
                        key={index + 1}
                        label={index + 1}
                        isPageNumber={true}
                        isActive={currentPage === index + 1}
                        onClick={() => onPageChange(index + 1)}
                    />
                ))}
            </Flex>
            <PaginationButton
                label="Next"
                onClick={() => onPageChange(currentPage + 1)}
                isDisabled={currentPage >= totalPages}
            />
        </Flex>
    )
}

export default Pagination;