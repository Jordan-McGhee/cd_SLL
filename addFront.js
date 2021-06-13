// FRONTS

// creates node class to reference/instantiate in SLL class
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class SLL {
    constructor(){
        // creates empty list, the head of the list is null by default
        this.head = null
    }

    // Add Front
    // Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.
    addFront(value) {
        // instantiate a new node using our class
        let newNode = new Node(value)
        // our new node's next will be the current head of the list
        newNode.next = this.head
        // change the head of the list to the new node
        this.head = newNode
        return this.head
    }

    // Remove Front
    // Write a method to remove the head node and return the new list head node. If the list is empty, return null.
    removeFront(){
        // check to see if there's an object stored at this.head
        if (this.head){
            // if so, set it equal to the next object's head in the list, removing the first object from the list
            this.head = this.next
        }
        // return the new object held at head
        return this.head
    }

    // Front
    // Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.
    front(){
        // checks for object stored at this.head
        if(this.head){
            // if so, returns the value held for that object
            return this.head.value
        }
        return null
    }

    // Contains
    // Add a method contains(value) to your SLL class, which is given a value as a parameter.  Return a boolean (true/false); true, if the list possesses a node that contains the provided value.

    contains(value){
        let check = this.head
        while(check){
            if(check.value == value){
                return true
            }
            check = check.next
        }
        return false
    }

    // Length
    // Create a new SLL method length() that returns number of nodes in that list.

    length(){
        let count = 0
        let runner = this.head
        while (runner){
            count += 1
            runner = runner.next
        }
        return count
    }
}

