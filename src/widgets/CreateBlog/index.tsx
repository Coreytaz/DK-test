import useInput from '@/shared/hook/useInput'
import { SmallAddIcon } from '@chakra-ui/icons'
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    Input,
    ModalFooter,
    useDisclosure,
    FormErrorMessage,
    useToast,
} from '@chakra-ui/react'
import React from 'react'
import { createBlog } from './api'

export const CreateBlog = () => {
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { reset: resetTitle, bindings: bindingsTitle } = useInput('', { isEmpty: true })
    const { reset: resetText, bindings: bindingsText } = useInput('', { isEmpty: true })

    const onCreateBlog = async () => {
        if (!bindingsTitle.inputValid || !bindingsText.inputValid) {
            toast({
                title: 'Blog not created',
                description: 'Fill in all the fields.',
                status: 'info',
                duration: 5000,
                isClosable: true,
            })
            return
        }
        try {
            const res = await createBlog({ title: bindingsTitle.value, body: bindingsText.value })
            toast({
                title: 'Blog has been created',
                description: res.data.title,
                status: 'success',
                duration: 5000,
                isClosable: true,
            })
            console.log(res)
        } catch (error) {
            toast({
                title: 'An error has occurred',
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
            console.log(error)
        } finally {
            resetTitle()
            resetText()
        }
    }

    return (
        <>
            <Button onClick={onOpen}>
                <SmallAddIcon />
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create new Blog</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl isInvalid={bindingsTitle.isDirty && bindingsTitle.empty}>
                            <FormLabel>Blog title</FormLabel>
                            <Input
                                placeholder="Blog title"
                                value={bindingsTitle.value}
                                onChange={bindingsTitle.onChange}
                                onBlur={bindingsTitle.onBlur}
                            />
                            {bindingsTitle.isDirty && bindingsTitle.empty && (
                                <FormErrorMessage>The field cannot be empty</FormErrorMessage>
                            )}
                        </FormControl>

                        <FormControl mt={4} isInvalid={bindingsText.isDirty && bindingsText.empty}>
                            <FormLabel>Text blog</FormLabel>
                            <Input
                                placeholder="Text blog"
                                value={bindingsText.value}
                                onChange={bindingsText.onChange}
                                onBlur={bindingsText.onBlur}
                            />
                            {bindingsText.isDirty && bindingsText.empty && (
                                <FormErrorMessage>The field cannot be empty</FormErrorMessage>
                            )}
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={() => onCreateBlog()}>
                            Create
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
